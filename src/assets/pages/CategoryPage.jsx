import React, { useState } from 'react'
import { useEffect } from 'react'
import { Badge, Button, Card, Image, List, Rate, Spin, Typography } from 'antd'
import { getProductsByCategory } from '../../Api'
import { Link, useParams } from 'react-router-dom'




function Products() {
const [loading,setLoading]=useState(false)
 const param =useParams()
  const [items, setItems] = useState([])
  useEffect(() => {
    setLoading(true)
    getProductsByCategory(param.CategoryName).then((res) => {
      setItems(res.products)
      setLoading(false)
    });
  }, [param]);

  if(loading){
    return  <Spin tip="Loading..." size="large">
    <div className="content" style={{
       margin:'100px'
      }} />
  </Spin>
  }
  return (

    <List
      grid={{ column: 3 }}
      renderItem={(product, index) => {
        return (
          <Badge.Ribbon className='itemCardBadge' text={product.discountPercentage} color='green'>
            <Card className='itemCard'
              title={product.title} key={index} cover={<Image className='itemCardImage' src={product.thumbnail} />}
              actions={[
                <Rate allowHalf disabled value={product.rating} />, <Link to={`/products/${product.id}` }><Button>Preview</Button></Link>
              ]}
            >
              <Card.Meta title={
                <Typography.Paragraph>
                  Price: ${product.price}{" "}
                  <Typography.Text delete type='danger'>
                    $
                    {parseFloat(product.price +
                      (product.price * product.discountPercentage) / 100).toFixed(2)}
                  </Typography.Text>
                </Typography.Paragraph>
              }
                description={<Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>{product.description}</Typography.Paragraph>}

              ></Card.Meta>
            </Card>
          </Badge.Ribbon>
        )
      }}
      dataSource={items}
    ></List>


  );
}

export default Products