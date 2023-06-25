import React, { useState } from 'react'
import { useEffect } from 'react'
import { Badge, Button, Card, Image, List, Spin, Rate, Typography } from 'antd'
import { getAllProducts } from '../../../Api';




function Products() {
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([])
  useEffect(() => {
    setLoading(true);
    getAllProducts().then((res) => {
      setItems(res.products)
      setLoading(false)
    });
  }, []);
  if (loading) {
    return <Spin tip="Loading..." size="large">
      <div className="content"  style={{
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
                <Rate allowHalf disabled value={product.rating} />, <Button type='link'>Add to Cart</Button>
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