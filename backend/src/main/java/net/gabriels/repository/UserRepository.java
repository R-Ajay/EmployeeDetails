package net.gabriels.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.gabriels.model.UserDetail;

@Repository
public interface UserRepository extends JpaRepository<UserDetail, Integer>{
	
	@Query(value ="select * from user_table where user_name Like :ch%", nativeQuery=true)
	public List<UserDetail> getAllUserDetailBasedFirstLetter(@Param("ch") char ch);

}
