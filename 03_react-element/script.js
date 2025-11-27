const container = React.createElement(
    'div',
    {className: 'container', id: 'container'}, 
    [
        React.createElement('section',{ key:1 },[
            React.createElement(
                'p',
                {key:1},
                'The library for web and native user interfaces'
            ),
            React.createElement(
                'img',
                {key:2 ,
                src:'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                style: { width:'200px' , 
                borderRadius:8,
                backgroundColor:'teal', 
                padding:15}
            }),
        ]),
        React.createElement('section',{key:2},[
            React.createElement('form',{key:1},[
                React.createElement('div',{key:1},[
                    React.createElement('label',{key:1 , htmlFor:'username'},'Username'),
                    React.createElement('input',{key:2 , id:'username'}),
                ]),
                React.createElement('div',{key:2},[
                    React.createElement('label',{key:1 , htmlFor:'password'},'Password'),
                    React.createElement('input',{key:2 , id:'password', type:'password'}),
                ]),
            ]),
        ]),
    ]
)

// const h2 = {
//     $$typeof: Symbol.for('react.element'),
//     props: {
//         className: 'subheading', 
//         children: [
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 props: {
//                     children:[
//                         {
//                             $$typeof: Symbol.for('react.element'),
//                             props: {
//                                 children: 'Hello button'
//                             },
//                             ref: null,
//                             type: "button",
//                         },
//                         {
//                             $$typeof: Symbol.for('react.element'),
//                             props: {
//                                 children: 'Hello button 2'
//                             },
//                             ref: null,
//                             type: "button",
//                         }
//                     ]
//                 },
//                 ref: null,
//                 type: "span",
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 props: {
//                     children: 'Hello React'
//                 },
//                 ref: null,
//                 type: "i",
//             },
//             {
//                 $$typeof: Symbol.for('react.element'),
//                 props: {
//                     children: 'Hello React'
//                 },
//                 ref: null,
//                 type: "b",
//             },

//         ]
//     },
//     ref: null,
//     type: "h2",
// }

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)

