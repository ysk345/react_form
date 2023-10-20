import React, { Component } from "react";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPhotoUpload = this.onPhotoUpload.bind(this); // upload handler
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      photo: null,
      isCompleted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state.name);
    console.log(this.state.description);
    console.log(this.state.category);
    console.log(this.state.quantity);
    console.log(this.state.price);
    console.log(this.state.isCompleted);
    console.log(this.state.photo);

    this.setState({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      photo: null,
      isCompleted: false,
    });
  }

  onPhotoUpload(e) {
    const photoFile = e.target.files[0]; // Get the selected file
    this.setState({
      photo: photoFile,
    });
  }

  onCancel(e) {
    e.preventDefault();

    this.setState({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: "",
      photo: null,
      isCompleted: false,
    });
  }

  render() {
    return (
      <div>
        <h1>New Product</h1>
        <button onClick={() => this.photoInput.click()}>UPLOAD PHOTO</button>
        <input
          type="file"
          ref={(input) => (this.photoInput = input)} // Hidden file input
          style={{ display: "none" }}
          onChange={this.onPhotoUpload}
        />
        {this.state.photo && <p>Photo: {this.state.photo.name}</p>}
        <br />
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <br />
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <br />
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.onChangeCategory}
          />
          <br />
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Quantity"
            value={this.state.quantity}
            onChange={this.onChangeQuantity}
          />
          <br />
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.onChangePrice}
          />
          <br />
          <button type="submit">SUBMIT</button>
          <button type="reset" onClick={this.onCancel}>CANCEL</button>
        </form>
      </div>
    );
  }
}
