import { useFecthGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", async () => {
  test("debe retornar el estado inicial", () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFecthGifs("One Punch")
    );
    const { data, loading } = result.current;
    // console.log(data, loading);
    // const { data, loading } = useFecthGifs("One Punch");
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test("debe retornar un arreglo de imgs y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFecthGifs("One Punch")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
