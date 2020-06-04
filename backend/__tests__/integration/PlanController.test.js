const request = require('supertest');

const app = require('../../src/app');

describe('Calculate Plan', () => {
  it('should return a stringify object with all price of plans calculated {depot: 011, destination: 016, minutes:20}', async () => {
    const response = await request(app)
      .post('/calculatePlan')
      .send({
        "depot": "011",
        "destination": "016",
        "minutes": 20
      })

      expect(response.status).toBe(200)

      expect(response.text).toEqual(JSON.stringify([
        {
          "type": "Sem Plano",
          "price": 38
        },
        {
          "type": "FaleMais 30",
          "price": 0
        },
        {
          "type": "FaleMais 60",
          "price": 0
        },
        {
          "type": "FaleMais 120",
          "price": 0
        }
      ]))
  })

  it('should return a stringify object with all price of plans calculated body {depot: 011, destination: 017, minutes:80}', async () => {
    const response = await request(app)
      .post('/calculatePlan')
      .send({
        "depot": "011",
        "destination": "017",
        "minutes": 80
      })

      expect(response.status).toBe(200)

      expect(response.text).toEqual(JSON.stringify([
        {
          "type": "Sem Plano",
          "price": 136
        },
        {
          "type": "FaleMais 30",
          "price": 93.5
        },
        {
          "type": "FaleMais 60",
          "price": 37.4
        },
        {
          "type": "FaleMais 120",
          "price": 0
        }
      ]))
  })
  it('should return a stringify object with all price of plans calculated body {depot: 018, destination: 011, minutes:200}', async () => {
    const response = await request(app)
      .post('/calculatePlan')
      .send({
        "depot": "018",
        "destination": "011",
        "minutes": 200
      })

      expect(response.status).toBe(200)

      expect(response.text).toEqual(JSON.stringify([
        {
          "type": "Sem Plano",
          "price": 380
        },
        {
          "type": "FaleMais 30",
          "price": 355.29999999999995
        },
        {
          "type": "FaleMais 60",
          "price": 292.59999999999997
        },
        {
          "type": "FaleMais 120",
          "price": 167.2
        }
      ]))
  })

  it('should return price null if param "depot-destination" != 011-016 || 016-011 || 011-017 || 017-011 || 011-018 || 018-011', async () => {
    const response = await request(app)
      .post('/calculatePlan')
      .send({
        "depot": "018",
        "destination": "017",
      })

      expect(response.status).toBe(200)

      expect(response.text).toEqual(JSON.stringify([
        {
          "type": "Sem Plano",
          "price": '-'
        },
        {
          "type": "FaleMais 30",
          "price": '-'
        },
        {
          "type": "FaleMais 60",
          "price": '-'
        },
        {
          "type": "FaleMais 120",
          "price": '-'
        }
      ]))
  })
})