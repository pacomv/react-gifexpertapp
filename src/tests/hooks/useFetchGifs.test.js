import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { data, loading } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test("debe retornar un arreglo de imágenes y el loading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    await waitFor(() => expect(result.current.data.length).toBeGreaterThan(0));

    const { data, loading } = result.current;

    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
  });
});
