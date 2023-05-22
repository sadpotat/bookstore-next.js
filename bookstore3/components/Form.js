import {
    Box,
    Button,
    Checkbox,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const labelSx = { marginTop: "5px", fontWeight: "bold", color: "#004d40" };

const Form = ({ data, onSubmit }) => {
    const [inputs, setInputs] = useState(
        data
            ? {
                  title: data.title,
                  author: data.author,
                  imageURL: data.imageURL,
                  details: data.details,
                  price: Number(data.price),
                  category: data.category,
                  featured: data.featured,
              }
            : {
                  title: "",
                  author: "",
                  imageURL: "",
                  details: "",
                  price: 0,
                  category: "",
                  featured: false,
              }
    );

    const handleChange = (event) => {
        setInputs((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputs);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "700px",
                width: "80%",
                backgroundColor: "white",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                margin: "auto",
                marginTop: "100px",
                marginBottom: "150px",
                outline: "#009688",
                borderRadius: "10px",
            }}
        >
            <Typography
                color={"#004d40"}
                fontWeight={"bold"}
                variant="h5"
                mt={8}
                padding={2}
                paddingTop={6}
                textAlign={"center"}
            >
                {data ? "Book Detail" : "Add Book"}
            </Typography>
            <Box padding={2} display="flex" flexDirection="column">
                <FormLabel sx={labelSx}>Title</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.title}
                    name="title"
                    margin="normal"
                    color="success"
                />
                <FormLabel sx={labelSx}>Author</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.author}
                    name="author"
                    margin="normal"
                    color="success"
                />
                <FormLabel sx={labelSx}>URL to the book's cover</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.imageURL}
                    name="imageURL"
                    margin="normal"
                    color="success"
                />
                <FormLabel sx={labelSx}>Category</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.category}
                    name="category"
                    margin="normal"
                    color="success"
                />
                <FormLabel sx={labelSx}>Details</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.details}
                    name="details"
                    margin="normal"
                    color="success"
                />
                <FormLabel sx={labelSx}>Price</FormLabel>
                <TextField
                    onChange={handleChange}
                    value={inputs.price}
                    name="price"
                    margin="normal"
                    color="success"
                />
                <FormLabel sx={labelSx}>Featured</FormLabel>
                <Checkbox
                    onChange={(event) =>
                        setInputs((prevState) => ({
                            ...prevState,
                            featured: event.target.checked,
                        }))
                    }
                    checked={inputs.featured}
                    name="featured"
                    sx={{
                        marginRight: "auto",
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ marginLeft: "75%" }}
                >
                    SUBMIT
                </Button>
            </Box>
        </form>
    );
};

export default Form;
