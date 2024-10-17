import React, { useState } from "react";
import './createpost.css'; 

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image && description) {
      const newPost = { image, description };
      setPosts([newPost, ...posts]);

      setImage(null);
      setDescription("");
    } else {
      alert("Please upload an image and add a description!");
    }
  };

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="input-file"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Add a description"
            className="textarea-description"
          />
        </div>
        <button type="submit" className="btn-submit">Post</button>
      </form>

      <div className="posts-section">
        <h3>Posts:</h3>
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.image} alt="Post" className="post-image" />
            <p className="post-description">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreatePost;
