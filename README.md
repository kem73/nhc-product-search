# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).


A React Native (Expo) setup using Expo Router, with tab navigation and a hidden product detail screen that does not appear in the bottom tab bar.

✨ Features:

✅ Bottom tab navigation using expo-router
✅ Hidden product/[id] page (not in tab bar)
✅ Auto-hide tab bar when navigating to product page
✅ Smooth back navigation without losing state
✅ Platform-specific animations

📁 Project Structure
app/
├── (tabs)/
│   ├── index.tsx          # Home Tab
│   ├── search.tsx         # Search Tab
│   ├── about.tsx          # About Tab
│   └── product/
│       ├── [id].tsx       # Product Details Screen
│       └── _layout.tsx    # Custom layout to hide tab bar
└── _layout.tsx            # Root layout



🚫 Removing Product Page from Tabs
You should not include the product/[id] screen inside your <Tabs.Screen />. Just remove this:


// ❌ Don't do this:
<Tabs.Screen
  name="product/[id]"
  options={{ href: null }}
/>
Expo Router will handle navigation automatically for nested routes like /product/[id].

📦 product/_layout.tsx:

This layout hides the tab bar when navigating to any screen under /product.
import { Stack } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function ProductLayout() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' } });

    return () => {
      navigation.getParent()?.setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, [navigation]);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Product Details',
      }}
    />
  );
}


🔁 Navigation Example:

Navigate from the search screen:
import { router } from 'expo-router';
const handlePress = (id: string) => {
  router.push(`/product/${id}`);
};



🔙 Go Back Without Losing State
The tab bar and previous state are preserved when you press back.

import { useRouter } from 'expo-router';

<TouchableOpacity onPress={() => router.back()}>
  <Image source={BackIcon} />
</TouchableOpacity>


💡 Tips:
router.push() adds to the stack (keeps history)
Use router.replace() only if you don’t want to go back
Keep product pages outside tabs, inside a separate folder like /product



🧪 Future Improvements:
Add deep linking support
Persist scroll position in search
Preload product data on hover/tap


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
