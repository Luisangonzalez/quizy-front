import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routedComponents } from './app-routing.module';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                routedComponents
            ],
            // providers: [
            //     App,
            //     AppState,
            //     Renderer,
            //     { provide: Router, useClass: MockRouter }
            // ],
            imports: [
                RouterTestingModule,
                // AppRoutingModule
            ]
        });
    });
    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let expectText = 'should create AppComponent';
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, expectText);
    });
});
