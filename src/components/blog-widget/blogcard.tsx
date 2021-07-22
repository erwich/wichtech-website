import React, { Fragment } from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap'
import { Link } from "gatsby"

const BlogCard = ({
    id,
    title,
    excerpt,
    date,
    path,
}) => {
  return (
    <>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>
              <Link to={ path }>
                  { title }
              </Link>
           </CardTitle>
          <CardText>{ excerpt }</CardText>
          <CardText>
            <small className="text-muted">{ date }</small>
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

const BlogCardTemp = ({
  id,
  title,
  excerpt,
  date,
  path,
}) => {
  return (
    <a 
      href={ path }
    >
      { date } - { title }
    </a>
  )
}

export default BlogCardTemp
