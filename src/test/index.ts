import { assert } from 'chai';
import * as supertest from 'supertest'
import * as express from 'express'

let app = express();
app.listen(3000);
const promiseTest = (): Promise<number> => new Promise((resolve, reject) => {
	resolve(1);
});

describe('Example async/await test', () => {
	it('awaits promise', async () => {
		const x = await promiseTest();
		assert.equal(x, 1);
	});
});
describe('Auth', () => {
	const endpoint = 'localhost:3000'
	it('not valid', function(done){
		supertest(app)
                .get(endpoint)
				.auth('admin', 'admin')
                .expect(404)
				.end(function(err, res){
					if (err) return done(err);
					done()
				  })
	});
});
describe('GET /matches', function(){
	it('respond with json', function(done){
	  supertest(app)
		.get('localhost:3000/matches')
		// .auth('admin', 'admin')
		.set('Accept', 'application/json')
		.expect(404)
		.end(function(err, res){
		  if (err) return done(err);
		  done()
		});
	})
  });

  describe('GET /teams', function(){
	it('respond with json', function(done){
	  supertest(app)
		.get('localhost:3000/teams')
		.auth('admin', 'admin')
		.set('Accept', 'application/json')
		.expect(404)
		.end(function(err, res){
		  if (err) return done(err);
		  done()
		});
	})
  })