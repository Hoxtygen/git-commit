import { isValidDate, formatDate } from './index'
describe('Utility Functions', () => {
	describe('isValidDate function', () => {
		it("should return true for a valid date", () => {
			const date = "2022-08-18T15:55:15Z";
			const validDate = isValidDate(date)
			expect(validDate).toBe(true)
		});

		it("should return false for an invalid date", () => {
			const date = "86-12-40";
			const validDate = isValidDate(date)
			expect(validDate).toBe(false)
		})
	})

	describe('FormatDate function', () => {
		it("should return a formatted date", () => {
			const date = "2022-08-18T15:55:15Z";
			const validDate = formatDate(date)
			expect(validDate).toEqual("August 18, 5:55 PM")
		})

		it("should return error for invalid date", () => {
			const date = "86-12-40";
			const validDate = formatDate(date)
			expect(validDate).toEqual("Invalid date")
		})
	})
})

