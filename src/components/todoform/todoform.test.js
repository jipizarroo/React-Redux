import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../redux/testStore";

import TodoForm from "./todoform";

describe("todoForm", () => {
  test("Should render as expected", async () => {
    renderWithProviders(<TodoForm />);
    const todoTitle = screen.getByText("Titulo tarea.");
    const todoDescription = screen.getByText("Descripción de la tarea.");

    const titlePlaceholder = screen.getByPlaceholderText("Titulo de la tarea.");
    const descriptionPlaceholder = screen.getByPlaceholderText(
      "Escriba una descripción de la tarea si lo desea."
    );

    const submitBtn = screen.getByText("Agregar Tarea");

    expect(todoTitle).toBeInTheDocument();
    expect(todoDescription).toBeInTheDocument();
    expect(titlePlaceholder).toBeInTheDocument();
    expect(descriptionPlaceholder).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });
  test("Cleaning when writing title", async () => {
    renderWithProviders(<TodoForm />);
    const titleTextArea = screen.getByPlaceholderText("Titulo de la tarea.");

    fireEvent.change(titleTextArea, { target: { value: "Tarea 1" } });

    expect(titleTextArea.value).toBe("Tarea 1");

    const submitBtn = screen.getByText("Agregar Tarea");

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(titleTextArea.value).toBe("");
    });
  });
  test("Cleaning when writing title and description", async () => {
    renderWithProviders(<TodoForm />);
    const titleTextArea = screen.getByPlaceholderText("Titulo de la tarea.");
    const descriptionTextArea = screen.getByPlaceholderText(
      "Escriba una descripción de la tarea si lo desea."
    );

    fireEvent.change(titleTextArea, { target: { value: "Tarea 1" } });
    fireEvent.change(descriptionTextArea, { target: { value: "Description 1" } });

    expect(descriptionTextArea.value).toBe("Description 1");

    const submitBtn = screen.getByText("Agregar Tarea");

    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(descriptionTextArea.value).toBe("");
    });
  });
});
