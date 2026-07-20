import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  status: string;
  message: string;
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        // Jika endpoint tidak membalas object dengan format { message, data },
        // interceptor ini akan membungkusnya secara otomatis
        if (data && typeof data === 'object' && 'message' in data && 'data' in data) {
          return {
            status: 'success',
            message: data.message,
            data: data.data,
          };
        }
        
        return {
          status: 'success',
          message: 'Success',
          data: data,
        };
      }),
    );
  }
}
