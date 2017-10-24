//archivo con datos (base de datos)
const data = require('./data.json')

//dependencias del web service
const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

//nuestra APP (web service)
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

router.get('/posts', (req, res) => {
	// devolvemos todos los posts
	res.json(data)
})

router.get('/posts/:id', (req, res) => {
	const { id } = req.params
	//'data' necesitamos sacar el objeto que haga match su id con el dado en la url
	console.log(typeof id)
	const post = data.filter((p) =>{
		return p.id === parseInt(id, 10) //filtro los que tengan el mismo id
	})[0]
	//devolvemos solo un post filtrado
	res.json(post) //devuelve el post en su formato json
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)


// curl http://localhost:8080/api/posts
