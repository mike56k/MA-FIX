import React from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  Avatar,
  Button,
  Div,
  FormLayout,
  Group,
  Header,
  Input,
  Panel,
  PanelHeader,
  PanelHeaderContent,
  Text,
  View,
} from "@vkontakte/vkui";

import "@vkontakte/vkui/dist/vkui.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      image: null,
    };
  }
  _isMounted = false;
  componentDidMount() {
    bridge.send("VKWebAppGetUserInfo", {}).then((user) => {
      this.setState({ user: user });
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getImage = async () => {
    this._isMounted = true;

    const image = document.getElementById("url").value;
    if (this._isMounted) {
      this.setState({ image: image });
    }
  };

  render() {
    return (
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>
            {this.state.user ? (
              <PanelHeaderContent
                status="VK Apps Image Example"
                before={<Avatar size={36} src={this.state.user.photo_100} />}
              >
                {this.state.user.first_name}
              </PanelHeaderContent>
            ) : (
              "VK Apps Image Example"
            )}
          </PanelHeader>

          <Group header={<Header mode="secondary">Задание</Header>}>
            <Div>Изменил ББББ</Div>
            <Div>
              Для облегчения тестирования лОКОКОКООКОК можно использовать
              картинку{" "}
              <Text weight="semibold">https://service.pavel.im/image</Text>{" "}
              (good code — все круто, bad code — сервер получил параметры
              запуска)
            </Div>

            <FormLayout>
              <Input type="text" id="url" />

              <Button size="xl" onClick={this.getImage}>
                Загрузить
              </Button>
            </FormLayout>

            {this.state.image && (
              <Div style={{ textAlign: "center" }}>
                <img src={this.state.image} alt="remote file" />
              </Div>
            )}
          </Group>
        </Panel>
      </View>
    );
  }
}

export default App;
