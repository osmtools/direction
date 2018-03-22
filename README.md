# direction

displays the [direction](https://wiki.openstreetmap.org/wiki/Key:direction) value of

* [tourism=viewpoint](https://wiki.openstreetmap.org/wiki/Tag:tourism%3Dviewpoint)
* [amenity=bench](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dbench)
* [amenity=hunting_stand](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dhunting_stand)
* [natural=cave_entrance](https://wiki.openstreetmap.org/wiki/Tag:natural%3Dcave_entrance)
* [man_made=adit](https://wiki.openstreetmap.org/wiki/Tag:man_made%3Dadit)
* [advertising](https://wiki.openstreetmap.org/wiki/Key:advertising)
* [traffic_sign](https://wiki.openstreetmap.org/wiki/Key:traffic_sign) (prefiltered to direction!=forward/backward)
* [camera:direction](https://wiki.openstreetmap.org/wiki/Proposed_features/Extended_tags_for_Key:Surveillance#Camera)

colours:

- green - `direction` value fully parsed by range (e.g. 90-225, N-E)
- orange - `direction` value parsed by single value (e.g. 45, SSW), angle set to 45°
- violet - `direction` couldn't be parsed
- red - no `direction`
