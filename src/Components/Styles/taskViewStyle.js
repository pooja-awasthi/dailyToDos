import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: '#9a4a70',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: '#fff',
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: '#9a4a70',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: '#fff',
    width: '66%',
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
  button: {
    height: 20,
    width: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDone: {
    height: 20,
    width: '100%',
    borderRadius: 7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
