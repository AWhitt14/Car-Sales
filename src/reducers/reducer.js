export const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };

export const carAppReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEATURE':
            const addedFeature = action.payload;
	          state.additionalPrice = state.additionalPrice + action.payload.price;
            console.log(action.payload);
            return {...state, car: {...state.car, features: [...state.car.features, addedFeature] },
            additionalFeatures: [...state.additionalFeatures.filter(x => {
              if (x.id !== action.payload.id){
                return x;
              }
            })]};
        
            case 'REMOVE_FEATURE':
                console.log(action.payload);
                state.additionalPrice = state.additionalPrice - action.payload.price;
                return {...state, car: {...state.car, features: 
                    [...state.car.features.filter( x => {
                        if (x.id !== action.payload.id){
                            return x;
                        }}
                    )]}, additionalFeatures: [...state.additionalFeatures,action.payload]
                }
        
        default: 
            return state;
        

    }
}