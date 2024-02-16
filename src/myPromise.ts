/**
 * Реализация промиса с нуля.
 * 
 * @author gjmazai.
 */

/** Тип описывающий функцию инициализатора для промиса. */
type TInitializer<T> = (
	resolve: ( value: T ) => void,
	reject: ( reason?: any ) => void
) => void;

type TAnyfunction = ( ...args: any[] ) => any;

class MyPromise<T> {
	constructor( initializer: TInitializer<T> ) {
		initializer( this.resolve, this.reject );
	}

	then( thenCallBack: ( value: T ) => void ) {
		this.thenCallBack = thenCallBack;
	}

	catch( catchCallBack: ( reason?: any ) => void ) {
		this.catchCallBack = catchCallBack;
	}

	/**
	 * Метод разрешает промис без ошибки.
	 * @param value - некоторое значение передаеваемое в метод для разрешения промиса и
	 * прокидки далее по цепочке вызовов.
	 */
	private resolve( value: T ) {

	}

	/**
	 * Метод вызывающий "ошибку" выполнени промиса. 
	 * @param reason - причина по котороой промис выполнился с ошибкой.
	 */
	private reject( reason?: any ) {

	}

	/** Callback принимаемый в методе then. */
	private thenCallBack: TAnyfunction | null = null;

	/** Callback принимаемый в методе catch. */
	private catchCallBack: TAnyfunction | null = null;
}

const myPromise = new Promise(( resolve, reject ) => {
	setTimeout(() => {
		resolve( 5 );
	}, 1000 )
}).then( value => console.log( value ) )
  .catch( error => console.log( error ) );