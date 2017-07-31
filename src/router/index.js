import Vue from 'vue'
import Router from 'vue-router'

const Login = resolve => require(['@/components/Login'], resolve)
const Home = resolve => require(['@/components/Home'], resolve)

Vue.use(Router)

export default new Router({
routes: [
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/',
			name: '',
			component: Home
			// children: [
				// {
				// 	path: '',
				// 	component: Home
				// }
			// ]
		}
	]
})
