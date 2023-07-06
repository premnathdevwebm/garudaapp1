import React from 'react';
import {
  Card,
  Flex,
  Text,
  StyleSheet,
  Icons,
} from 'squashapps-react-native-uikit';
import TitleWithValue from '../../common/TitleWithValue';

const {SvgDocument, SvgFileDownload} = Icons;
const styles = StyleSheet.create({
  overAll: {
    padding: 20,
    marginBottom: 20,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  flexOverAll: {
    // marginTop: 20,
  },
});

const DocumentList = () => {
  return (
    <Flex overrideStyle={styles.flexOverAll}>
      <TitleWithValue title="Document" />
      {[{}, {}, {}].map((_list, index) => (
        <Card
          key={(1 + index).toString()}
          outline
          align="stretch"
          overrideStyle={styles.overAll}>
          <Flex row middle between>
            <Flex row>
              <SvgDocument />
              <Text type="body300" overrideStyle={styles.marginLeft20}>
                medical-record.pdf
              </Text>
            </Flex>
            <SvgFileDownload />
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};
export default DocumentList;
