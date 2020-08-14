import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { API } from "aws-amplify";

const myInit = {
  // OPTIONAL
  headers: {}, // OPTIONAL
  response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
};

export default function AddPin() {
  const [items, setItems] = useState([{ id: "", ingredientName: "" }]);
  const [pinUrl, setPinUrl] = useState("");

  //Function to make sure url is from pinterest
  const fromPinterest = (url) => {
    if (url.includes("www.pinterest.com")) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validate user input. Make sure it's from Pinterest.com
    if (fromPinterest(pinUrl)) {
      console.log("adding pin now");

      myInit.pinUrl = pinUrl;
      //Add pin via addPin action
      API.get("getItems", "/items")
        .then((res) => {
          console.log("getItems response: ", res);
        })
        .catch((err) => {
          console.log(err);
        });
      // addPinNoUser(pinUrl); //call add pin action here
      //close modal
    } else {
      console.log("error, most likely a bad url.");
      document.getElementById("errorMsg");
    }
  };
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="pinURL">Pinterest URL</Label>
          <Input
            className="rounded-pill"
            type="url"
            name="pinURL"
            id="pinURL"
            placeholder="Add Pinterest URL here"
            onChange={(e) => setPinUrl(e.target.value)}
          ></Input>
          <small id="errorMsg" className="alert-danger ml-1 invisible">
            Whoops! Make sure the url is from Pinterest.
          </small>

          <Button
            className="main-buttons text-center p-0 pl-2 mb-2 mx-auto shadow-sm rounded-pill"
            color="dark"
            style={{ marginTop: "2rem" }}
            block
          >
            Add Pin
          </Button>
        </FormGroup>
      </Form>

      <ListGroup>
        <TransitionGroup className="grocery-list">
          {items
            .slice(0)
            .reverse()
            .map(({ id, ingredientName }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem className="d-flex justify-content-between p-2">
                  <span className="align-content-center">{ingredientName}</span>

                  <Button
                    className="remove-btn btn-toolbar align-content-center"
                    size="sm"
                    // onClick={onDeleteClick.bind(this, id)}
                  >
                    <i class="fa fa-trash-o"></i>
                  </Button>
                </ListGroupItem>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </ListGroup>
    </div>
  );
}
