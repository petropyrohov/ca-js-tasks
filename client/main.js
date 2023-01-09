import AlertComponent from "./components/alert-component.js";
import CarFormComponent from "./components/car-form-component.js";
import CarsTableComponent from "./components/cars-table-component.js";
import ContainerComponent from "./components/container-component.js";
import FlexContainerComponent from "./components/flex-container-component.js";
import ApiService from "./services/api-service.js";

let carsTableComponent;
let carFormComponent;
let alertComponent;

let cars;
let editedRowId = null;

const handleCarDelete = async (id) => {
  try {
    await ApiService.deleteCar(id);
    cars = await ApiService.getCars();
    carsTableComponent.renderCars(cars, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleCarCreate = async (carProps) => {
  try {
    await ApiService.createCar(carProps);
    cars = await ApiService.getCars();
    carsTableComponent.renderCars(cars, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleArtUpdate = async (artProps) => {
  try {
    await ApiService.updateCar(editedRowId, artProps);
    arts = await ApiService.getArts();
    editedRowId = null;
    carFormComponent.disableEditing();
    carsTableComponent.renderArts(arts, editedRowId);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

const handleArtEdit = (artProps) => {
  if (editedRowId === artProps.id) editedRowId = null;
  else editedRowId = artProps.id;

  artsTableComponent.renderArts(arts, editedRowId);
  if (editedRowId === null) {
    artFormComponent.disableEditing();
    artFormComponent.onSubmit = handleArtCreate;
  } else {
    artFormComponent.enableEditing(carProps);
    artFormComponent.onSubmit = handleArtUpdate;
  }
}

(async function initialize() {
  const rootHtmlElement = document.querySelector('#root');
  const containerComponent = new ContainerComponent();
  alertComponent = new AlertComponent();
  containerComponent.addComponents(alertComponent);
  rootHtmlElement.append(containerComponent.htmlElement);
  try {
    arts = await ApiService.getArts();
    artTableComponent = new artTableComponent({
      arts,
      onDelete: handleArtDelete,
      onEdit: handleArtEdit,
    });
    artFormComponent = new artFormComponent({
      onSubmit: handleArtCreate,
    });
    const flexContainerComponent = new FlexContainerComponent();
    flexContainerComponent.addComponents(artTableComponent, artFormComponent);
    containerComponent.addComponents(flexContainerComponent);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
