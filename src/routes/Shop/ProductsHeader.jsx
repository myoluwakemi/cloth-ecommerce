import classnames from "classnames";
import { Menu, Grid, List } from "react-feather";

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
} from "reactstrap";


const ProductHeader = ({activeView, setSidebarOpen}) => {
   

    const sortToggleText = {
    'price-desc': 'Highest',
    'price-asc': 'Lowest',
    featured: 'Featured'
  }
  return (
    <div className="ecommerce-header">
        <Row>
        <Col sm='12'>
          <div className='ecommerce-header-items'>
            <div className='result-toggler'>
              <button className='navbar-toggler shop-sidebar-toggler' >
                <span className='navbar-toggler-icon d-block d-lg-none'>
                  <Menu onClick={setSidebarOpen} size={14}  />
                </span>
              </button>
              <span  className='search-results'> Results Found</span>
            </div>
            <div className='view-options d-flex'>
              <UncontrolledButtonDropdown className='dropdown-sort'>
                <DropdownToggle className='text-capitalize me-1' color='primary' outline caret>
                 
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    className='w-100'
                   
                  >
                    Featured
                  </DropdownItem>
                  <DropdownItem
                    className='w-100'
                   
                  >
                    Lowest
                  </DropdownItem>
                  <DropdownItem
                    className='w-100'
                
                  >
                    Highest
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
              <ButtonGroup>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn grid-view-btn', {
                    active: activeView === 'grid'
                  })}
                  color='primary'
                  outline
                 
                >
                  <Grid size={18} />
                </Button>
                <Button
                  tag='label'
                  className={classnames('btn-icon view-btn list-view-btn', {
                    active: activeView === 'list'
                  })}
                  color='primary'
                  outline
            
                >
                  <List size={18}  />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </Col>
      </Row>
    </div>

  )

}
export default ProductHeader;
