import React, { useState }  from "react"
import axios from "axios"
import { useColorMode } from "theme-ui"
import {
    Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap'

const MyForm = () => {
    const [colorMode, setColorMode] = useColorMode()
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    })
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      })
      if (ok) {
        form.reset()
      }
    }
    const handleOnSubmit = e => {
      e.preventDefault()
      const form = e.target
      setServerState({ submitting: true, status: null })
      axios({
        method: "post",
        url: "https://getform.io/f/cb8014f4-b004-4faa-af63-3ae0b9066377",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, "Thanks!", form)
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form)
        })
    }
    return (
        serverState.status ? (
            <p>Thanks, I'll be in touch!</p>
        ) : (
            <Form onSubmit={ handleOnSubmit }>
                <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="Name" id="name" className={ colorMode == "dark" ? "bg-transparent text-white" : "bg-transparent text-black" } />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="Email" id="email" className={ colorMode == "dark" ? "bg-transparent text-white" : "bg-transparent text-black" } />
                </FormGroup>
                <FormGroup>
                <Label for="exampleEmail">Message</Label>
                <Input type="textarea" name="Message" id="message" className={ colorMode == "dark" ? "bg-transparent text-white" : "bg-transparent text-black" } />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        )
    )
  }
  
  export default MyForm