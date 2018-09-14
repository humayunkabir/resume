import React, { Component } from 'react';

class Identity extends Component {
  state = {
    imageURL:
      'https://lh4.googleusercontent.com/-0EfeQuhKFkM/AAAAAAAAAAI/AAAAAAAAFkc/guW4Fka2r-U/photo.jpg',
    firstName: 'Humayun',
    lastName: 'Kabir',
    middleName: '',
    designation: 'Full-stack Developer',
    email: 'humayunkabir@technext.it',
    institution: 'Technext Limited'
  };
  render() {
    const {
      imageURL,
      firstName,
      lastName,
      middleName,
      designation,
      email,
      institution
    } = this.state;
    const { theme } = this.props;
    return (
      <div
        className={`border rounded px-4 py-5 shadow-lg text-center border-${theme}`}
      >
        <img
          src={
            imageURL ||
            'http://fboverlays.com/pages/assets/frontend/img/previewImage.png'
          }
          alt={firstName || lastName || middleName}
          className="img-fluid rounded-circle shadow-sm"
          width={180}
        />
        <h2 className="mb-0">
          {firstName} {middleName} {lastName}
        </h2>
        {email && (
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}
        <p className="lead mb-0">
          {designation} {designation && institution && 'at'} {institution}
        </p>
      </div>
    );
  }
}

export default Identity;
