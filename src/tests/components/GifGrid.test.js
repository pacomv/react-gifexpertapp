import React from "react";
import "@testing-library/jest-dom";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { render, screen } from "@testing-library/react";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";

  test("debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("debe mostrar items cuando se cargan las imágenes mediante useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/imagen.jpg",
        title: "Title",
      },
      {
        id: "123",
        url: "https://localhost/imagen.jpg",
        title: "Title",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
