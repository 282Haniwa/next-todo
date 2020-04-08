import React, { Children, cloneElement, useState } from 'react';
import styled, { css } from 'styled-components';
import MenuItemComponent from '../MenuItem';
import Button from '../Button';
import LogoSvg from '../../resources/logo/logo.svg';

const inactiveColor = 'rgba(255, 255, 254, 0.54)';

const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 290px;
  background-color: ${props => props.theme.colors.main};
`;

const LogoWrapper = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`;

const Logo = styled(LogoSvg)`
  position: absolute;
  top: 32px;
  left: 39px;
`;

const CategoriesLabelWrapper = styled.div`
  width: 90%;
  padding: 0 12px;
  margin-top: 24px;
  margin-bottom: 8px;
`;

const CategoriesLabel = styled.span`
  position: relative;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.paper};
  border-bottom: 2px solid rgba(255, 255, 254, 0.85);
  padding: 2px 4px 2px 2px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 6px;
    width: 2px;
    background-color: rgba(255, 255, 254, 0.85);
  }
`;

const MenuItem = styled(MenuItemComponent)`
  color: ${inactiveColor};

  &.selected {
    color: ${props => props.theme.colors.paper};
  }
`;

const StyledButton = styled(Button)`
  width: 200px;
  margin-top: 12px;
`;

export default props => {
  const {
    categories: defaultCategories = [],
    selected: defaultSelected,
    onSelect,
    onChange,
    onEdit,
    ...other
  } = props;

  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);
  const [categories, setCategories] = useState(defaultCategories);

  const handleSelectCategory = category => event => {
    if (!edit) {
      setSelected(category);
      onSelect && onSelect(category, event);
    }
  };

  const handleClickEditButton = () => {
    setEdit(true);
  };

  const handleChangeCategory = targetIndex => value => {
    setCategories(
      categories.map((category, index) => {
        if (index === targetIndex) {
          return value;
        }
        return category;
      })
    );
  };

  const handleAddCategory = () => {
    setCategories([...categories, '']);
  };

  const handleDeleteCategory = targetIndex => () => {
    setCategories(
      categories.filter((category, index) => {
        return index !== targetIndex;
      })
    );
  };

  const handleSaveCategories = event => {
    setEdit(false);
    const nextCategories = categories.filter(category => {
      return category !== '';
    });
    setCategories(nextCategories);
    onChange && onChange(nextCategories, event);
  };

  return (
    <SideMenu {...other}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <MenuItem
        className={selected === 'All' ? 'selected' : ''}
        value="All"
        onClick={handleSelectCategory('All')}
      />
      <MenuItem
        className={selected === 'Favorites' ? 'selected' : ''}
        value="Favorites"
        onClick={handleSelectCategory('Favorites')}
      />
      <CategoriesLabelWrapper>
        <CategoriesLabel>Categories</CategoriesLabel>
      </CategoriesLabelWrapper>
      {categories.map((category, index) => {
        return (
          <MenuItem
            className={selected === category ? 'selected' : ''}
            value={category}
            edit={edit}
            onClick={handleSelectCategory(category)}
            onChange={handleChangeCategory(index)}
            onDelete={handleDeleteCategory(index)}
            key={index}
          />
        );
      })}
      {!edit && (
        <StyledButton
          icon="edit"
          variant="main"
          onClick={handleClickEditButton}
          style={{ backgroundColor: 'rgba(166, 57, 75, 0.3)' }}
        >
          Edit Categories
        </StyledButton>
      )}
      {edit && (
        <>
          <StyledButton variant="white" onClick={handleAddCategory}>
            Add Category
          </StyledButton>
          <StyledButton variant="lime" onClick={handleSaveCategories}>
            Save Categories
          </StyledButton>
        </>
      )}
    </SideMenu>
  );
};
