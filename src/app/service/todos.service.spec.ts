import { TestBed } from '@angular/core/testing';

import { TodosService } from './todos.service';
import { Todo } from './todo.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
const API_URI: string = 'https://jsonplaceholder.typicode.com/todos';
const expectedData: Todo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};
describe('TodosService', () => {
  let service: TodosService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(TodosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTodos should return expected data', (done) => {
    const expectedData: Todo[] = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: 'et porro tempora',
        completed: true,
      },
    ];

    service.getTodos().subscribe((data: any) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(API_URI);

    testRequest.flush(expectedData);
  });

  it('#getTodos should use GET to retrieve data', () => {
    service.getTodos().subscribe();

    const testRequest = httpTestingController.expectOne(API_URI);

    expect(testRequest.request.method).toEqual('GET');
  });

  it('#updateTodos should return expected data', (done) => {
    service.updateTodos(expectedData).subscribe((data: any) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(API_URI+ '/' + expectedData.id);

    testRequest.flush(expectedData);
  });

  it('#updateTodos should use GET to retrieve data', () => {
    service.updateTodos(expectedData).subscribe();

    const testRequest = httpTestingController.expectOne(API_URI+ '/' + expectedData.id);

    expect(testRequest.request.method).toEqual('PUT');
  });


  
  it('#getTodos should return an empty array', (done) => {
    const expectedData: Todo[] = [];
    
    service.getTodos().subscribe((data: any) => {
      expect(data).toEqual(expectedData)
      done();
    });

    const testRequest = httpTestingController.expectOne(API_URI);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });

  it('#updateTodo should return an empty object on error', (done) => {
    const errorData: Todo[] = [];
    
    service.updateTodos(expectedData).subscribe((data: any) => {
      expect(data).toEqual(errorData)
      done();
    });

    const testRequest = httpTestingController.expectOne(API_URI+ '/' + expectedData.id);

    testRequest.flush('error', { status: 500, statusText: 'Broken Service' });
  });
});
