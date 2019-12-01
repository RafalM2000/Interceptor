import { HttpInterceptor,
        HttpRequest,
        HttpHandler,
        HttpHeaders } from '@angular/common/http';

export class TokenInterceptor implements HttpInterceptor {
    intercept( req: HttpRequest<any>, next: HttpHandler) {
        const newReqest = req.clone({
           headers: new HttpHeaders({
               Autohrization: '12345'
           })
        });
        return next.handle(newReqest);
    }
}
