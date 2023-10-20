import React , {Component} from 'react'

export default class AddShop extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onLogoUpload = this.onLogoUpload.bind(this); //handler for upload
        this.onCancel = this.onCancel.bind(this);

        this.state = {
            name: "",
            description: "",
            logo: null,
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

    onSubmit(e) {
        e.preventDefault();
    
        console.log(this.state.name);
        console.log(this.state.description);
        console.log(this.state.isCompleted);
        console.log(this.state.logo);

        // Clear the form fields
        this.setState({
            name: "",
            description: "",
            logo: null,
            isCompleted: false,
        });
    }

    onLogoUpload(e) {
        const logoFile = e.target.files[0]; // Get the selected file
        this.setState({
          logo: logoFile,
        });
      }

      onCancel(e) {
        e.preventDefault();
    
        this.setState({
          name: '',
          description: '',
          logo: null,
          isCompleted: false,
        });
      }

    render() {
      return (
        <div>
          <h1>New Shop</h1>
          <button onClick={() => this.logoInput.click()}>UPLOAD LOGO</button>
            <input
            type="file"
            ref={(input) => (this.logoInput = input)} // Hidden file input
            style={{ display: 'none' }}
            onChange={this.onLogoUpload}
            />

            {/* Display the selected logo file name, if any */}
            {this.state.logo && <p>Logo: {this.state.logo.name}</p>}
        
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
                <button type="submit">SUBMIT</button>
                <button type="reset" onClick={this.onCancel}>CANCEL</button>
            </form>
        </div>
        );
    }
}