import App from "./App";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./redux/testStore";

const testData = {
  id: 0,
  detail: {
    title: "Tarea 1",
    description: "Tarea 1 inicializada en el store de redux.",
  },
};

describe("TodoCard", () => {
  test("Should render with no data on", async () => {
    renderWithProviders(<App />);

    const mainTitle = screen.getByText("Todo-List React-Redux");
    expect(mainTitle).toBeInTheDocument();

    const titleTextArea = screen.getByPlaceholderText("Titulo de la tarea.");
    expect(titleTextArea).toBeInTheDocument();

    const textAreaDescription = screen.getByText("Descripción de la tarea.");
    expect(textAreaDescription).toBeInTheDocument();

    const titlePlaceholder = screen.getByPlaceholderText("Titulo de la tarea.");
    const descriptionPlaceholder = screen.getByPlaceholderText(
      "Escriba una descripción de la tarea si lo desea."
    );
    expect(titlePlaceholder).toBeInTheDocument();
    expect(descriptionPlaceholder).toBeInTheDocument();

    const todoTitle = screen.queryByText("Tarea 1");
    const todoDescription = screen.queryByText(
      "Tarea 1 inicializada en el store de redux."
    );

    expect(todoTitle).not.toBeInTheDocument();
    expect(todoDescription).not.toBeInTheDocument();
  });

  test("Should render with data stored on Redux", async () => {
    const preloadedState = {tasks: [testData]}

    renderWithProviders(<App />, {preloadedState});

    const title = screen.getByText("Tarea 1");
    const description = screen.getByText(
      "Tarea 1 inicializada en el store de redux."
    );
    const deleteBtn = screen.getByText("Borrar");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });
});
