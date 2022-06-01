import './modalWindow.scss';

import { CloseButton, Modal } from 'react-bootstrap';
import { BlockTitle } from '../title/BlockTitle';

import striginoMenu, {
  buffetMenu,
  BuffetMenuType,
  ItemType,
  MenuPropsType,
} from '../../../data/striginoMenu';

type MyVerticallyCenteredModalType = {
  data: MenuPropsType;
  dataBuffer: BuffetMenuType;
  show: boolean;
  onHide: () => void;
};

function MyVerticallyCenteredModal(props: MyVerticallyCenteredModalType) {
  const { data, dataBuffer, onHide } = props;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-window__border">
        <div className="modal-window__header">
          <div className="modal-window__buttonClose">
            <CloseButton onClick={onHide} />
          </div>
          <BlockTitle
            data={{ title: 'Меню' }}
            className="modal-window__title"
          />
        </div>
        <Modal.Body>
          {data.map((item, i) => {
            return (
              <div key={i} className="menu-content menu-content_md">
                <div className="menu-header">
                  <h4 className="menu-header__title">{item.title}</h4>
                  <div className="delimiter delimiter_mr10"></div>
                </div>
                <ul style={{ paddingLeft: 0 }}>
                  <MenuItems content={item.content} />
                </ul>
              </div>
            );
          })}
          {dataBuffer.map((item, i) => {
            const content = item.content.map((element, i) => (
              <div key={i}>
                <h4 className="menu-header__title menu-header__title_center">
                  {element.title}
                </h4>
                <ul style={{ paddingLeft: 0 }}>
                  <MenuItems content={element.content} />
                </ul>
              </div>
            ));
            return (
              <div key={i} className="menu-content menu-content_md">
                <div className="menu-header">
                  <h4 className="menu-header__title">{item.title}</h4>
                  <div className="delimiter delimiter_mr10"></div>
                </div>
                <ul style={{ paddingLeft: 0 }}>{content}</ul>
              </div>
            );
          })}
        </Modal.Body>
      </div>
    </Modal>
  );
}

type ItemDescriptionType = {
  items: {
    dishName: string | undefined;
    weight?: string | undefined;
    price?: number | undefined;
  }[];
};

const ItemDescription = (props: ItemDescriptionType) => {
  const { items } = props;
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="menu-item__desc">
          <div>{item.dishName}</div>
          <div>{item.weight}</div>
        </div>
      ))}
    </>
  );
};

type MenuItemsType = {
  content: ItemType[];
};

const MenuItems = (props: MenuItemsType) => {
  const { content } = props;

  const contentItems = content.map((item: ItemType, i: number) => {
    let description;
    if (item.desc) {
      description = item.desc;
    } else if (item.description) {
      description = <ItemDescription items={item.description} />;
    }

    return (
      <li key={i} className="menu-item menu-item_pd">
        <div className="menu-item__name">
          <div className="menu-item__productName">{item.dishName}</div>
          <div className="menu-item__productDesc">{description}</div>
        </div>
        <div className="menu-item__weight">{item.weight}</div>
        <div className="menu-item__price">{item.price},00</div>
      </li>
    );
  });

  return <>{contentItems}</>;
};

type ModalWindowType = {
  state: boolean;
  setModalShow: (e: boolean) => void;
};

const ModalWindow = (props: ModalWindowType) => {
  const { state, setModalShow } = props;
  return (
    <>
      <MyVerticallyCenteredModal
        dataBuffer={buffetMenu}
        data={striginoMenu}
        show={state}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ModalWindow;
