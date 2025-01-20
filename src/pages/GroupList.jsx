import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function GroupList() {
  const groups = [
    {
      id: 1,
      name: 'BTS',
      type: 'boy band',
      year: '2013',
      image: 'path_to_bts_image.jpg'
    },
    {
      id: 2,
      name: 'Stray Kids',
      type: 'boy band',
      year: '2018',
      image: 'path_to_straykids_image.jpg'
    },
    {
      id: 3,
      name: 'aespa',
      type: 'girl group',
      year: '2020',
      image: 'path_to_aespa_image.jpg'
    },
    {
      id: 4,
      name: 'ENHYPEN',
      type: 'boy band',
      year: '2020',
      image: 'path_to_enhypen_image.jpg'
    },
    {
      id: 5,
      name: 'NewJeans',
      type: 'girl group',
      year: '2022',
      image: 'path_to_newjeans_image.jpg'
    },
    {
      id: 6,
      name: 'TWICE',
      type: 'girl group',
      year: '2015',
      image: 'path_to_twice_image.jpg'
    },
    {
      id: 7,
      name: 'BLACKPINK',
      type: 'girl group',
      year: '2016',
      image: 'path_to_blackpink_image.jpg'
    },
    {
      id: 8,
      name: 'SEVENTEEN',
      type: 'boy band',
      year: '2015',
      image: 'path_to_seventeen_image.jpg'
    },
    {
      id: 9,
      name: 'LE SSERAFIM',
      type: 'girl group',
      year: '2022',
      image: 'path_to_le_sserafim_image.jpg'
    },
    {
      id: 10,
      name: 'TXT',
      type: 'boy band',
      year: '2019',
      image: 'path_to_txt_image.jpg'
    },
    {
      id: 11,
      name: 'BABYMONSTER',
      type: 'girl group',
      year: '2024',
      image: 'path_to_babymonster_image.jpg'
    },
    {
      id: 12,
      name: 'ILLIT',
      type: 'girl group',
      year: '2024',
      image: 'path_to_illit_image.jpg'
    },
    {
      id: 13,
      name: 'NCT DREAM',
      type: 'boy band',
      year: '2016',
      image: 'path_to_nct_dream_image.jpg'
    },
    {
      id:   14,
      name: 'KISS OF LIFE',
      type: 'girl group',
      year: '2023',
      image: 'path_to_kiss_of_life_image.jpg'
    },
    {
      id: 15,
      name: 'ATEEZ',
      type: 'boy band',
      year: '2018',
      image: 'path_to_ateez_image.jpg'
    },
    {
      id: 16,
      name: 'BIGBANG',
      type: 'boy band',
      year: '2006',
      image: 'path_to_bigbang_image.jpg'
    }
  ]

  const [show, setShow] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const dropdownRef = useRef(null);

  const filterOptions = [
    { id: 'boy-band', label: 'Boy Band' },
    { id: 'girl-group', label: 'Girl Group' },
    { id: '2020s', label: '2020s' },
    { id: '2010s', label: '2010s' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (filter) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState('popularity');
  const sortRef = useRef(null);

  const sortOptions = [
    { id: 'popularity', label: 'Popularity' },
    { id: 'name-asc', label: 'Name (A-Z)' },
    { id: 'name-desc', label: 'Name (Z-A)' },
    { id: 'year-asc', label: 'Year (Oldest)' },
    { id: 'year-desc', label: 'Year (Newest)' }
  ];
  
  // Add click outside handler for sort
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSort(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortGroups = (groups) => {
    switch (selectedSort) {
      case 'name-asc':
        return [...groups].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...groups].sort((a, b) => b.name.localeCompare(a.name));
      case 'year-asc':
        return [...groups].sort((a, b) => parseInt(a.year) - parseInt(b.year));
      case 'year-desc':
        return [...groups].sort((a, b) => parseInt(b.year) - parseInt(a.year));
      case 'popularity':
      default:
        return groups; // Keep original order as popularity
    }
  };

  const [searchQuery, setSearchQuery] = useState('');

  // Keep the filtering logic
  const filteredGroups = sortGroups(
    groups.filter(group => {
      // Search filter
      const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filters
      const matchesFilters = selectedFilters.length === 0 || selectedFilters.every(filter => {
        switch(filter) {
          case 'boy-band':
            return group.type === 'boy band';
          case 'girl-group':
            return group.type === 'girl group';
          case '2020s':
            return parseInt(group.year) >= 2020;
          case '2010s':
            return parseInt(group.year) >= 2010 && parseInt(group.year) < 2020;
          default:
            return true;
        }
      });
  
      return matchesSearch && matchesFilters;
    })
  );

  // Add pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredGroups.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredGroups.length / itemsPerPage);
  
  return (
    <Container 
      fluid 
      className="py-3 pb-5 px-0"
      style={{ maxWidth: '100%' }}
    >
      <Breadcrumb currentPage="Groups" />
      <div
        className="position-relative overflow-hidden mx-auto w-100"
        style={{borderRadius: '20px', backgroundColor: '#f0f0f0'
        }}>
        <Row className="pt-5 px-5 g-4">
          <Col md={3}className="position-relative" ref={sortRef}>
            <Button 
              variant="light" 
              onClick={() => setShowSort(!showSort)}
              className="w-100 text-start d-flex justify-content-between align-items-center"
              style={{backgroundColor: 'white', border: 'none', boxShadow: 'none', padding: '0.375rem 0.75rem'}}
            >
              {selectedSort ? sortOptions.find(o => o.id === selectedSort)?.label : 'Sort By'}
              <i className={`bi bi-chevron-${showSort ? 'up' : 'down'}`}></i>
            </Button>
            {showSort && (
              <div 
                className="mt-1 bg-white border rounded shadow-sm z-3"
                style={{width: '100%', maxHeight: '200px', overflowY: 'auto', boxSizing: 'border-box'}}
              >
                {sortOptions.map(option => (
                  <div 
                    key={option.id}
                    className="p-2 d-flex align-items-center"
                    onClick={() => {
                      setSelectedSort(option.id);
                      setShowSort(false);
                    }}
                    style={{ cursor: 'pointer', ':hover': { backgroundColor: '#f8f9fa' } }}
                  >
                    <input
                      type="radio"
                      checked={selectedSort === option.id}
                      className="me-2"
                      onChange={() => {}}
                    />
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </Col>
          <Col md={3} className="position-relative" ref={dropdownRef}>
            <Button 
              variant="light" 
              onClick={() => setShow(!show)}
              className="w-100 text-start d-flex justify-content-between align-items-center"
              style={{backgroundColor: 'white', border: 'none', boxShadow: 'none', padding: '0.375rem 0.75rem'}}>
              {selectedFilters.length ? (
                <>
                  {selectedFilters.length === 1 
                    ? filterOptions.find(f => f.id === selectedFilters[0])?.label
                    : <>
                      <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        {filterOptions.find(f => f.id === selectedFilters[0])?.label}
                        <span style={{ color: '#6c757d' }}>+{selectedFilters.length - 1}</span>
                      </div>
                    </>
                  } 
                </>
              ) : 'Filter Groups'}
              <i className={`bi bi-chevron-${show ? 'up' : 'down'}`}></i>
            </Button>
            {show && (
              <div 
                className="mt-1 bg-white border rounded shadow-sm z-3"
                style={{width: '100%', maxHeight: '200px', overflowY: 'auto', boxSizing: 'border-box', left: 0, right: 0}}>
                {filterOptions.map(option => (
                  <div 
                    key={option.id}
                    className="p-2 d-flex align-items-center"
                    onClick={() => toggleFilter(option.id)}
                    style={{ cursor: 'pointer', ':hover': { backgroundColor: '#f8f9fa' } }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(option.id)}
                      className="me-2"
                      onChange={() => {}}
                    />
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </Col>
          <Col md={{span: 3, offset: 3}} className="position-relative">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search groups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{backgroundColor: 'white', border: 'none', boxShadow: 'none'}}
              />
              <span className="input-group-text" style={{backgroundColor: 'white', border: 'none'}}>
                <i className="bi bi-search"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="pt-5 px-5 g-4">
          {currentItems.map((group) => (
            <Col key={group.id} xs={12} sm={6} lg={3}>
              <Link
                to={`/groups/${encodeURIComponent(group.name)}`}
                className="text-decoration-none w-100"
              >
                <Card 
                  className="h-100 position-relative overflow-hidden mx-auto"
                  style={{ border: 'none' }}
                >
                  <div className="pt-3 px-3 position-relative">
                    <Card.Img 
                      variant="top" 
                      src={group.image} 
                      className="aspect-ratio-1x1 object-fit-cover"
                      style={{height: '200px', borderRadius: '8px', border: 'none', outline: 'none', boxShadow: 'none'
                      }}
                    />
                  </div>
                  <Card.Body className="p-3 position-relative">
                  <Card.Title className="text-center">
                    {group.name}
                    <div className="my-2">
                      <Badge bg="secondary" pill className="fw-normal me-2">
                        <i className="bi bi-people-fill me-2"></i>
                        {group.type}
                      </Badge>
                      <Badge bg="secondary" pill className="fw-normal">
                        <i className="bi bi-calendar-event me-2"></i>
                        {group.year}
                      </Badge>
                    </div>
                  </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        <Row className="pt-5 pb-4 px-5 g-4">
          <Col className="d-flex justify-content-center">
            <nav>
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i className="bi bi-chevron-left"></i>
                  </button>
                </li>
                {[...Array(totalPages)].map((_, idx) => (
                  <li 
                    key={idx + 1} 
                    className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="bi bi-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default GroupList