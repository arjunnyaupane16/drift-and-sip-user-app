import { usePathname, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TopNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [visitUsOpen, setVisitUsOpen] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'Cart', path: '/cart' },
    
  ];

  const visitUsItems = [
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Gallery', path: '/gallery' },
  ];

  const isVisitUsActive = ['/about', '/contact', '/gallery'].some((p) =>
    pathname.startsWith(p)
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.navContainer}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <TouchableOpacity
              key={item.title}
              onPress={() => {
                setVisitUsOpen(false);
                router.push(item.path);
              }}
              style={[styles.navItem, isActive && styles.activeNavItem]}
            >
              <Text style={[styles.navText, isActive && styles.activeNavText]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          );
        })}

        {/* Visit Us Dropdown */}
        <View style={styles.dropdownWrapper}>
          <TouchableOpacity
            onPress={() => setVisitUsOpen((prev) => !prev)}
            style={[
              styles.navItem,
              isVisitUsActive && styles.activeNavItem,
            ]}
          >
            <Text
              style={[
                styles.navText,
                isVisitUsActive && styles.activeNavText,
              ]}
            >
              Visit Us ▾
            </Text>
          </TouchableOpacity>

          {visitUsOpen && (
            <View style={styles.dropdown}>
              {visitUsItems.map((subItem) => (
                <TouchableOpacity
                  key={subItem.title}
                  onPress={() => {
                    setVisitUsOpen(false);
                    router.push(subItem.path);
                  }}
                  style={styles.dropdownItem}
                >
                  <Text style={styles.dropdownText}>{subItem.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderBottomWidth: 1.2,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
    zIndex: 10,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 3,
  },
  activeNavItem: {
    backgroundColor: '#4cafa3',
  },
  navText: {
    fontSize: 14.5,
    color: '#333',
    fontWeight: '500',
  },
  activeNavText: {
    color: '#fff',
  },
  dropdownWrapper: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 45,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 6,
    zIndex: 999,
    minWidth: 150,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  dropdownText: {
    fontSize: 14.2,
    color: '#333',
  },
});
