import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    get(): {
        now: string;
    };
    put(body: any): {
        requestBody: any;
    };
}
