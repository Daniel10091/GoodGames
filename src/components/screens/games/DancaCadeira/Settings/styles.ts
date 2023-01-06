import { StyleSheet } from 'react-native';
import { Theme } from '../../../../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: Theme.Colors.AliceBlue,
  },

  // Header styles
  header: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  closeModalButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModalIcon: {
    fontSize: 30,
    color: Theme.Colors.MidnigntGreenEagleGreen,
  },

  // Form styles
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.Colors.MidnigntGreenEagleGreen,
  },
  textFieldContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textFieldButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.MagentaCrayola,
    borderRadius: 8,
  },
  textFieldButtonIcon: {
    fontSize: 20,
    color: Theme.Colors.White,
  },
  textFieldContent: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    fontSize: 16,
    color: Theme.Colors.MidnigntGreenEagleGreen,
  },
});

export default styles;