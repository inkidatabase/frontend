import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Breadcrumb({ currentPage = 'Page' }) {
  return (
    <div className="py-2 pb-4">
      <Container className="px-0">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 d-flex align-items-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li className="breadcrumb-item d-flex align-items-center">
                    <Link 
                    to=""
                    className="text-decoration-none text-secondary px-3 d-flex align-items-center"
                    style={{ 
                        backgroundColor: '#f0f0f0',
                        borderRadius: '50px',
                        fontSize: '15px',
                        height: '40px'
                    }}
                    >
                    <i className="bi bi-house-fill" style={{ marginRight: '8px', fontSize: '16px' }}></i>
                    Home
                    </Link>
                </li>
                <div className="d-flex align-items-center">
                    <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="https://www.svgrepo.com/show/533661/chevron-right.svg"
                    style={{ color: '#6c757d', margin: '0 5px' }}
                    >
                    <path 
                        d="M9 5L16 12L9 19" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                    </svg>
                </div>
                <li className="breadcrumb-item active d-flex align-items-center" aria-current="page">
                    <span 
                    className="text-dark fw-medium px-3 d-flex align-items-center"
                    style={{ 
                        backgroundColor: '#f0f0f0',
                        borderRadius: '50px',
                        fontSize: '15px',
                        height: '40px'
                    }}
                    >
                    {currentPage}
                    </span>
                </li>
            </ol>
        </nav>
      </Container>
    </div>
  );
}

Breadcrumb.propTypes = {
  currentPage: PropTypes.string
};

export default Breadcrumb;