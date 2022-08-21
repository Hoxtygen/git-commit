import { renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from './useLocalStorage';


describe('useLocalStorage', () => {
	it("is callable", () => {
		const { result } = renderHook(() => useLocalStorage('foo', 'bar'));
		expect(result.current).toBeDefined();
	});

	it('accepts JSON strings', () => {
		const key = 'name';
		const defaultValue = 'djfejifeijfd_kdfkjeijfkdff';

		localStorage.setItem(key, JSON.stringify(defaultValue));

		const { result } = renderHook(() => useLocalStorage(key, defaultValue));

		expect(result.current[0]).toBe("djfejifeijfd_kdfkjeijfkdff");
	});
})