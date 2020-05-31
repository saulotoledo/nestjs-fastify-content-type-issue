import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SampleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    context.switchToHttp().getResponse()
      .header('Content-Type', 'application/hal+json; charset=utf-8');

    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  }
}