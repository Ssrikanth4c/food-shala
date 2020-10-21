import {LOGIN, REGISTER, REGISTER_SUCCESS} from './actionType';
import TokenGenerator from 'uuid-token-generator';

const initState={
    userType:'',
    token:'',
    registation_success:false,
    login_success:false,
    customer_login:[
        {
            username:'srikanth',
            password: 'sree',
            email:'srikanth@gmail.com',
            food_type: 'Both'
        },
        {
            username:'sree1220',
            password: '1220',
            email:'sree1220@gmail.com',
            food_type: 'Veg'
        }
    ],
    restaurant_login:[
        {
            username:'srikanth',
            password: 'sree',
            email:'srikanth@gmail.com'
        },
        {
            username:'sree1220',
            password: '1220',
            email:'sree1220@gmail.com'
        }
    ]
}

const reducer=(state=initState, {type, payload})=>{
    switch(type){
        case LOGIN:{
            // {userType: "restaurant", username: "", password: ""}
            console.log(payload)
            const {userType ,username, password} = payload;
            let authSuccess=false;
            if(userType ==='customer' || userType ==='restaurant'){
                state.customer_login.forEach(item=>{
                    if(item.username === username && item.password=== password){
                        alert('login success')
                        authSuccess=true;
                    }else{
                        alert('invalid username / password')
                    }
                })
            }
            if(authSuccess){
                console.log('login success')
                const token= new TokenGenerator()
                return{
                    ...state,
                    token: token.generate(),
                    login_success:true,
                    userType: payload.userType
                }
            }
            
        }
        case REGISTER:{
            // userType: "customer", username: "", email: "", password: "", food_type: "Both"}
            const {customer_login, restaurant_login}= state
            const {userType}= payload
            if(userType ==='customer'){
                let flag=false
                customer_login.map(item=>{
                    if(item.username === payload.username){
                        flag=true
                        return alert('user already existed');
                    }
                })                
                if(!flag){

                    console.log('new reg')
                    const new_cust_reg={
                        username:payload.username,
                        password:payload.password,
                        email: payload.email,
                        food_type: payload.food_type
                    }
                    return{
                        ...state,
                        customer_login:[ ...customer_login, new_cust_reg],
                        userType: payload.userType,
                        registation_success:true
                    }
                }
            }
            if(userType==='restaurant'){
                let flag=false
                restaurant_login.map(item=>{
                    if(item.username=== payload.username || item.email=== payload.email){
                        flag=true;
                       return alert('restaurant already registered');
                    }
                })
                if(!flag){
                    alert('Restaurant registerd successfully!')
                    const new_restaurant_reg={
                        username:payload.username,
                        password:payload.password,
                        email:payload.email
                    }
                    return{
                        ...state,
                        restaurant_login:[ ...restaurant_login, new_restaurant_reg],
                        userType:payload.userType,
                        registation_success:true
                    }
                }
            }
            
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default reducer;