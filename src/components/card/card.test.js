import TodoCard from "./card";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../redux/testStore";

const cardData = {
  id: 0,
  detail: {
    title: "Tarea 1",
    description: "Mostrando description de la tarea",
  },
};

describe("TodoCard", () => {
  test("Should render", async () => {
    renderWithProviders(<TodoCard task={cardData} id={cardData.id} />);
    const title = screen.getByText("Tarea 1");
    const description = screen.getByText("Mostrando description de la tarea");
    const deleteBtn = screen.getByText("Borrar");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();
  });

  test("Should pop alert when deleting", async () => {
    renderWithProviders(<TodoCard task={cardData} id={cardData.id} />);

    const confirmMock = jest.spyOn(window, "confirm").mockImplementation();
    const deleteBtn = screen.getByText("Borrar");

    userEvent.click(deleteBtn);
    expect(confirmMock).toHaveBeenCalledTimes(1);
  });
});
