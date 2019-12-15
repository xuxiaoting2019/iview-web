import Index from '../views/Index.vue'
import Option1 from '../views/Option1.vue'
import Option2 from '../views/Option2.vue'
import Option3 from '../views/Option3.vue'

export default [{
    path: '/',
    redirect: '/option1',
    name: 'Index',
    component: Index,
    children: [{
        path: 'option1',
        name: 'Option1',
        component: Option1
    }, {
        path: 'option2',
        name: 'Option2',
        component: Option2
    }, {
        path: 'option3',
        name: 'Option3',
        component: Option3
    }]
}]