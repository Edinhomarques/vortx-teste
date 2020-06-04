const tariff = require('../../src/Utils/tariff')
describe('Tarif Function', () => {

  it('should return 1.90 if tariff(011-016)', () => {
    expect(tariff('011-016')).toBe(1.90)
  })
  it('should return 2.90 if tariff(016-011)', () => {
    expect(tariff('016-011')).toBe(2.90)
  })
  it('should return 1.70 if tariff(011-017)', () => {
    expect(tariff('011-017')).toBe(1.70)
  })
  it('should return 2.70 if tariff(017-011)', () => {
    expect(tariff('017-011')).toBe(2.70)
  })
  it('should return 0.90 if tariff(011-018)', () => {
    expect(tariff('011-018')).toBe(0.90)
  })
  it('should return 1.90 if tariff(018-011)', () => {
    expect(tariff('018-011')).toBe(1.90)
  })
  it('should return "-" if tariff(011-017)', () => {
    expect(tariff('011-17')).toBe('-')
  })
})