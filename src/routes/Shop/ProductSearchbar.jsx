import { Search } from "react-feather";
// ** Reactstrap Imports
import { Row, Col, InputGroup, Input, InputGroupText } from "reactstrap";

const ProductSearchbar = () => {
  return (
    <div id="ecommerce-searchbar" className="ecommer-searchbar">
      <Row className="mt-1">
        <Col sm="12">
          <InputGroup className="input-group-merge">
            <Input className="search-product" placeholder="Search Product" />
            <InputGroupText>
              <Search className="text-muted" size={14} />
            </InputGroupText>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductSearchbar
