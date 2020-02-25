
export class DateFormat {

    static selector = 'dateFormat';

    static $inject: string[] = [];

    static filter(): (time: number) => string {
        return (time: number): string => {
            if (!time) {
                return '';
            }

            const date = new Date(time);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        };
    }


}
