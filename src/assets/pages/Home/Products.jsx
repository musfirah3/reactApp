import React, { useState } from 'react'
import { useEffect } from 'react'
import { Badge, Button, Card, Image, List, Spin, Rate, Typography } from 'antd'
import { getAllProducts } from '../../../Api';
import { Link } from 'react-router-dom';
import{AiOutlineShoppingCart} from 'react-icons/ai'


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
    return <div className='d-flex justify-content-center align-items-center' style={{ width: '80vw', height: '80vh' }}>


      <Spin tip="Loading..." size="large">
        <div className="content"/>
      </Spin>
      </div>
  
  }
  
  return (

    <List 
    className='bkgroundCard'
      grid={{ column: 3 }}
      renderItem={(product, index) => {
        return (
          <Badge.Ribbon className='itemCardBadge' text={product.discountPercentage} color='green'>
            <Link to={`/products/${product.id}`} className='text-decoration-none'>
            <Card className='itemCard'
              title={product.title} key={index} cover={<Image className='itemCardImage' src={product.thumbnail} />}
              actions={[
                <Rate allowHalf disabled value={product.rating} />, <Button type='link'><AiOutlineShoppingCart className='m-1'/> Add to Cart</Button>
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
                description={<Typography.Paragraph ellipsis={{ rows: 1, expandable: true, symbol: 'more' }}>{product.description}</Typography.Paragraph>}

              ></Card.Meta>
            </Card>
            </Link>
          </Badge.Ribbon>
        )
      }}
      dataSource={items}
    ></List>


  );
}

export default Products