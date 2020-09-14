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
  List,
  Cell,
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
  parseQueryString = (string) => {
    return string
      .slice(1)
      .split("&")
      .map((queryParam) => {
        let kvp = queryParam.split("=");
        return { key: kvp[0], value: kvp[1] };
      })
      .reduce((query, kvp) => {
        query[kvp.key] = kvp.value;
        return query;
      }, {});
  };
  componentDidMount() {
    bridge.send("VKWebAppGetUserInfo", {}).then((user) => {
      this.setState({ user: user });
    });
  }

  getImage = async () => {
    const image = document.getElementById("url").value;

    if (image) {
      alert({ image });
      this.setState({ image: image });
    }
  };

  render() {
    const queryParams = this.parseQueryString(window.location.search);
    const hashParams = this.parseQueryString(window.location.hash);
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
              Для облегчения тестирования можно использовать картинку{" "}
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

            {this.state.image && this.state.user && (
              <Div style={{ textAlign: "center" }}>
                <img src={this.state.image} alt="remote file" />
              </Div>
            )}
          </Group>
          <Group title="Query params">
            <List>
              {Object.keys(queryParams).map((key) => {
                let value = queryParams[key];
                return (
                  <Cell description={key}>
                    {value ? value : <span style={{ color: "red" }}>-</span>}
                  </Cell>
                );
              })}
            </List>
          </Group>

          <Group title="Hash params">
            <List>
              {Object.keys(hashParams).map((key) => {
                let value = hashParams[key];
                return (
                  <Cell description={key}>
                    {value ? value : <span style={{ color: "red" }}>-</span>}
                  </Cell>
                );
              })}
            </List>
          </Group>
        </Panel>
      </View>
    );
  }
}

export default App;
