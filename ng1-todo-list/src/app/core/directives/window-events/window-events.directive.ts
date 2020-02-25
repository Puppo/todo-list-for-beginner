import * as ng from 'angular';

export class WindowEventsDirective implements ng.IDirective {
    static selector = 'windowEvents';
    static $inject: string[] = ['$window'];
    static create: any[];

    restrict: 'A';
    onWindowScroll$dlg: (event: Event) => any;
    onWindowResize$dlg: (event: Event) => any;

    static factory = ($window: ng.IWindowService) => new WindowEventsDirective($window);

    link(scope: ng.IScope, instanceElement: ng.IAugmentedJQuery, instanceAttributes: ng.IAttributes): void {
        ng.element(this.$window).bind('scroll', this.onWindowScroll$dlg);
        ng.element(this.$window).bind('resize', this.onWindowResize$dlg);
    }

    protected onWindowScroll(event: Event) {
        console.log('Wooo window scroll');
    }
    protected onWindowResize(event: Event) {
        console.log('Wooo window resize');
    }

    private constructor(private $window: ng.IWindowService) {
        this.onWindowScroll$dlg = this.onWindowScroll.bind(this);
        this.onWindowResize$dlg = this.onWindowResize.bind(this);
    }

}

WindowEventsDirective.create = [...WindowEventsDirective.$inject, WindowEventsDirective.factory];
